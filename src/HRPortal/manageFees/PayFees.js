import React from "react";
import { useForm, Controller } from "react-hook-form";
import { payFees ,getStudents} from "../../store/studentSlice";
import { useDispatch,useSelector } from "react-redux";
const FeeVoucherForm = (props) => {
    const dispatch=useDispatch()
    console.log(props.data);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // Handle form submission here, e.g., send the data to the server
  await  dispatch(payFees({email:data.studentEmail,month:data.month}))
  dispatch(getStudents("pay"));

  props.fun()
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "400px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <p
          style={{
            textAlign: "center",
            color: "#DA5854",
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          Pay Online
        </p>
        <label htmlFor="studentCode" style={{ marginTop: "20px" }}>
          Student Code
        </label>
        <Controller
          name="studentCode"
          control={control}
          defaultValue={props.data.studentCode}
          rules={{ required: "Student Code is required" }}
          render={({ field }) => (
            <input {...field} style={{ width: "100%", padding: "5px" }} />
          )}
        />
        {errors.studentCode && (
          <span style={{ color: "#DA5854" }}>{errors.studentCode.message}</span>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="studentName">Student Name</label>
        <Controller
          name="studentName"
          control={control}
          defaultValue={props.data.studentName}
          rules={{ required: "Student Name is required" }}
          render={({ field }) => (
            <input {...field} style={{ width: "100%", padding: "5px" }} />
          )}
        />
        {errors.studentName && (
          <span style={{ color: "#DA5854" }}>{errors.studentName.message}</span>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="studentName">Student Email</label>
        <Controller
          name="studentEmail"
          control={control}
          defaultValue={props.data.studentEmail}
          rules={{ required: "Student Email is required" }}
          render={({ field }) => (
            <input {...field} style={{ width: "100%", padding: "5px" }} />
          )}
        />
        {errors.studentEmail && (
          <span style={{ color: "#DA5854" }}>{errors.studentEmail.message}</span>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="studentCnic">Student CNIC</label>
        <Controller
          name="studentCnic"
          control={control} 
          defaultValue={props.data.studentCinc}
          rules={{
            required: "Student CNIC is required",
            pattern: {
              value: /^\d{5}-\d{7}-\d$/,
              message: "Invalid CNIC format",
            },
          }}
          render={({ field }) => (
            <input {...field} style={{ width: "100%", padding: "5px" }} />
          )}
        />
        {errors.studentCnic && (
          <span style={{ color: "#DA5854" }}>{errors.studentCnic.message}</span>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="month">Month</label>
        <Controller
          name="month"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} style={{ width: "100%", padding: "5px" }}>
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          )}
        />
        {errors.month && (
          <span style={{ color: "#DA5854" }}>{errors.month.message}</span>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fee">Fee</label>
        <Controller
          name="fee"
          control={control}
          defaultValue="5000"
          rules={{ required: "Fee is required", pattern: /^\d+$/ }}
          render={({ field }) => (
            <input {...field} style={{ width: "100%", padding: "5px" }} />
          )}
        />
        {errors.fee && (
          <span style={{ color: "#DA5854" }}>{errors.fee.message}</span>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#DA5854",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 25px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Pay
      </button>
    </form>
  );
};

export default FeeVoucherForm;
