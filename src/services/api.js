const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5063";

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors || "Failed to create reservation");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};

export const fetchReservations = async (userId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/reservations?userId=${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch reservations");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};

export const removeReservation = async (reservationId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/reservations/${reservationId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove reservation");
    }
  } catch (error) {
    console.error("Error removing reservation:", error);
    throw error;
  }
};
