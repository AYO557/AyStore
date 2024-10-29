function useAuth() {
  const fetchUser = async (email, password, endpoint, name = "") => {
    let api = `http://localhost:3000/api/users/${endpoint}`;

    console.log(email, password, name);
    try {
      // fetch data
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      // convert json
      const user = await response.json();
      if (!response.ok) {
        throw new Error(user);
      }
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      return null;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };
  return { fetchUser };
}

export default useAuth;
