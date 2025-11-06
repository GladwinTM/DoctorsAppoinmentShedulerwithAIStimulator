import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DUMMY_PASSWORD = "password123";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, thunkAPI) => {
    const { email, password } = userCredentials;

    // Simple check (demo only)
    if (password !== DUMMY_PASSWORD) {
      // reject with a message (will be available as action.payload if you use rejectWithValue)
      return thunkAPI.rejectWithValue("Invalid credentials");
    }

    // Simulate API response
    const user = { id: 1, name: "Demo User", email };

    // store if you want to persist
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: JSON.parse(localStorage.getItem("user") || "null"),
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
