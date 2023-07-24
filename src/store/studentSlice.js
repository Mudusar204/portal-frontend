import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const counterSlice = createSlice({
  name: "counter",
  initialState: { studentList: [] },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(addStudent.pending, (state, action) => {
        toast.loading("loading");
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.studentList = [...state.studentList, action.payload];
        toast.dismiss();
        toast.success("Successfully Added");
      })
      .addCase(addStudent.rejected, (state, action) => {
        toast.dismiss();
        toast.error("error in slice");
      })

      .addCase(getStudents.pending, (state, action) => {})
      .addCase(getStudents.fulfilled, (state, action) => {
        if(action.payload!==null && action.payload!==undefined){
        state.studentList = action.payload;
        toast.dismiss();
        toast.success("Get Students");}
      })
      .addCase(getStudents.rejected, (state, action) => {
        toast.dismiss();
        toast.error("error while Getting todos");
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

/////////////////////////////////thunk///////////////////
export const addStudent = createAsyncThunk(
  "add/student",
  async (dispatch, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      return;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStudents = createAsyncThunk(
  "get/student",
  async (dispatch, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      console.log(state);
      if (state.studentSlice.studentList.length === 0) {
        const studentList = await axios.get(
          "http://localhost:8000/students/getStudent"
        );
        console.log(studentList.data, "student from store");
        return studentList.data.students;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
