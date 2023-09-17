import Car from "../../assets/images/car-empty.png";
export const DefaultCar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "100px",
        gap: "60px",
      }}
    >
      <p
        style={{
          display: "block",
          fontSize: "20px",
          paddingTop: "100px",
        }}
      >
        You don't have any favorites
      </p>
      <img src={Car} alt="car" width="300px" />
    </div>
  );
};
