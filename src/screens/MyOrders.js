import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MyOrders = () => {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  // if (Object.keys(orderData).length !== 0) {
  //   let data = orderData.orderData;
  //   let arr = data.order_data;
  //   console.log(arr);
  // }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          {Object.keys(orderData).length !== 0
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data.map((item, i) => {
                      console.log(item);

                      return (
                        <div key={i}>
                          {item.order_date ? (
                            <>
                              <div className="m-auto mt-5">
                                {(data = item.order_date)}
                                <hr />
                              </div>
                              <div className="col-12 col-md-6 col-lg-3">
                                <div
                                  className="card mt-3"
                                  style={{
                                    width: "16rem",
                                    maxHeight: "360px",
                                  }}
                                >
                                  <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div
                                      className="container w-100 p-0"
                                      style={{ height: "38px" }}
                                    >
                                      <span className="m-1">{item.qty}</span>
                                      <span className="m-1">{item.size}</span>
                                      <span className="m-1">{data}</span>
                                      <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                        ₹{item.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })
                  : "";
              })
            : ""}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyOrders;
