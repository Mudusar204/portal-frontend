import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const counterSlice = createSlice({
  name: "counter",
  initialState: { studentList: [] ,applications:[],userEmail:""},
  reducers: {
   setUserEmail(state,action){
state.userEmail=action.payload
console.log(action.payload);
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addStudent.pending, (state, action) => {
        toast.loading("loading");
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        if(action.payload!==null && action.payload!==undefined){
          state.studentList=[]
          state.applications = action.payload;
        }
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
      })

      .addCase(getApplication.pending, (state, action) => {})
      .addCase(getApplication.fulfilled, (state, action) => {
        if(action.payload!==null && action.payload!==undefined){
        state.applications = action.payload;
        toast.dismiss();
        toast.success("Get Applications");}
      })
      .addCase(getApplication.rejected, (state, action) => {
        toast.dismiss();
        toast.error("error while Getting Application");
      })

      .addCase(deleteApplication.pending, (state, action) => {})
      .addCase(deleteApplication.fulfilled, (state, action) => {
        if(action.payload!==null && action.payload!==undefined){
        state.applications = action.payload;
        toast.dismiss();
        toast.success("Application deleted");}
      })
      .addCase(deleteApplication.rejected, (state, action) => {
        toast.dismiss();
        toast.error("Could not Delete");
      })

      .addCase(payFees.pending, (state, action) => {})
      .addCase(payFees.fulfilled, (state, action) => {
        if(action.payload!==null && action.payload!==undefined){
        state.applications = action.payload;
        toast.dismiss();
        toast.success("Successfully Payed");}
      })
      .addCase(payFees.rejected, (state, action) => {
        toast.dismiss();
        toast.error("Could not Pay ");
      });
  },
});

export const { setUserEmail } = counterSlice.actions;

export default counterSlice.reducer;

/////////////////////////////////thunk//////////////////////////////////////
export const addStudent = createAsyncThunk(
  "add/student",
  async (dispatch, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const student = await axios.post( 
        "http://localhost:8000/student/addStudent",{email:dispatch}
      );
   console.log(student.data.applications);
   return student.data.applications
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
      console.log(dispatch);
      if (state.studentSlice.studentList.length === 0||dispatch!==undefined) {
        const studentList = await axios.get( 
          "http://localhost:8000/student/getStudent"
        );
        console.log(studentList.data, "student from store");
        return studentList.data.students;
      }
    } catch (error) {
      console.log(error);
    }
  }
);



export const getApplication = createAsyncThunk(
  "get/application",
  async (dispatch, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      console.log(state);
      if (state.studentSlice.applications.length === 0) {
        const applicationList = await axios.get( 
          "http://localhost:8000/student/getApplications"
        );
        console.log(applicationList.data, "student from store");
        return applicationList.data.application;
      }
    } catch (error) {
      console.log(error);
    }
  }
);


export const deleteApplication = createAsyncThunk(
  "deleteApplication",
  async (dispatch, thunkAPI) => {
    console.log(dispatch,'disapatch');
    try {
        const applicationList = await axios.post( 
          "http://localhost:8000/student/deleteApplication",{studentCode:dispatch}
        );
        console.log(applicationList.data, "student from store");
        return applicationList.data.applications;
      
    } catch (error) {
      console.log(error);
    }
  }
);


export const payFees = createAsyncThunk(
  "payFees",
  async (dispatch, thunkAPI) => {
    console.log(dispatch,'disapatch');
    try {
        const payFees = await axios.post( 
          "http://localhost:8000/student/payFees",{email:dispatch.email,month:dispatch.month}
        );
        console.log(payFees.data, "fees list form store");
        return payFees.data.message
      
    } catch (error) {
      console.log(error);
    }
  }
);
