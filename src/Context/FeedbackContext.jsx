import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: null,
    edit: false,
  });

  // 🔗 Backend Base URL from .env
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchFeedback();
  }, []);

  // 📥 Fetch feedback (GET)
  const fetchFeedback = async () => {
    console.log("API Base URL ->", API_BASE_URL);
    console.log("Fetching from:", `${API_BASE_URL}/api/feedback`);

    try {
      const response = await fetch(`${API_BASE_URL}/api/feedback`);
      console.log("Response Status:", response.status);

      const data = await response.json();
      console.log("Fetched Data:", data);

      const formatted = data.map((item) => ({
        id: item._id,
        text: item.text,
        rating: item.rating,
      }));

      setFeedback(formatted);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  // ➕ Add Feedback (POST)
  const addFeedback = async (newFeedback) => {
    console.log("Adding Feedback to:", `${API_BASE_URL}/api/feedback`);

    try {
      const response = await fetch(`${API_BASE_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });

      console.log("POST Status:", response.status);

      const data = await response.json();
      console.log("POST Response:", data);

      const formatted = { id: data._id, text: data.text, rating: data.rating };
      setFeedback([formatted, ...feedback]);
    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  // ❌ Delete Feedback (DELETE)
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Deleting from:", `${API_BASE_URL}/api/feedback/${id}`);

      try {
        await fetch(`${API_BASE_URL}/api/feedback/${id}`, {
          method: "DELETE",
        });
        setFeedback(feedback.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Delete Error:", error);
      }
    }
  };

  // ✏️ Edit Feedback (prepare)
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // 🔄 Update Feedback (PUT)
  const updateFeedback = async (id, updItem) => {
    console.log("Updating:", `${API_BASE_URL}/api/feedback/${id}`);

    try {
      const response = await fetch(`${API_BASE_URL}/api/feedback/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updItem),
      });

      console.log("PUT Status:", response.status);

      const data = await response.json();

      const formatted = { id: data._id, text: data.text, rating: data.rating };

      setFeedback(
        feedback.map((item) => (item.id === id ? formatted : item))
      );

      setFeedbackEdit({
        item: null,
        edit: false,
      });

    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        feedbackEdit,
        isLoading,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
