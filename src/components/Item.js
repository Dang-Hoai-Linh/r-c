import "../App.css";
import axios from "axios";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Build = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [itemData, setitemData] = useState([]);
  useEffect(() => {
    axios
      .post("getItem")
      .then((res) => {
        setitemData(res.data.itemData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getItem = () => {
    axios
      .post("getItem")
      .then((res) => {
        setitemData(res.data.itemData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [inputFields, setInputFields] = useState([
    {
      index_type: "",
    },
  ]);

  const [inputFieldsIndex, setInputFieldsIndex] = useState([
    {
      index_value: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        index_type: "",
      },
    ]);

    setInputFieldsIndex([
      ...inputFieldsIndex,
      {
        index_value: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);

    const row = [...inputFieldsIndex];
    row.splice(index, 1);
    setInputFieldsIndex(row);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleChangeIndex = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFieldsIndex];
    list[index][name] = value;
    setInputFieldsIndex(list);
  };
  const [imageSelected, setImageSelected] = useState("");
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ml_default");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/riaclaravel/image/upload",
        formData
      )
      .then(
        (res) => {
          const data = {
            name: "test upload anh",
            url: res.data.url,
          };
          axios
            .post("addItem", data)
            .then((res) => {
              getItem();
              toggle();
              toast.success("Upload ảnh thành công!");
            })
            .catch((err) => {
              console.log(err);
            });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <Layout>
      <Button color="danger" onClick={toggle}>
        Thêm trang bị
      </Button>
      <Modal className="modalAddItem" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thêm trang bị</ModalHeader>
        <ModalBody className="modalAddItemBody">
          <div className="modalAddItemInputImage">
            <input
              type="file"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
            />
          </div>

          <div className="modalAddItemName">Tên trang bị:</div>
          <div className="modalAddItemValue">
            <input type="text" />
          </div>

          <div className="modalAddItemName">Giá:</div>
          <div className="modalAddItemValue">
            <input type="text" />
          </div>

          <div className="modalAddItemName">Giá ghép:</div>
          <div className="modalAddItemValue">
            <input type="text" />
          </div>

          <div className="modalAddItemName">Các chỉ số:</div>
          <div>
            {inputFields.map((data, index) => {
              const { index_type } = data;
              return (
                <div key={index}>
                  <div className="modalAddItemName">
                    <select
                      className="modalLoaiChiSo"
                      value={index_type}
                      name="index_type"
                      id="cars"
                      onChange={(evnt) => handleChange(index, evnt)}
                    >
                      <option>Loại chỉ số</option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="vw">VW</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="modalAddItemValue">
                    <input
                      type="number"
                      value={inputFieldsIndex[index].index_value}
                      name="index_value"
                      onChange={(evnt) => handleChangeIndex(index, evnt)}
                    />
                  </div>

                  <div className="modalDeleteLoaiChiSo">
                    {inputFields.length !== 1 ? (
                      <button
                        onClick={(evnt) => removeInputFields(index, evnt)}
                      >
                        -
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}

            <button onClick={addInputField}>Thêm loại chỉ số</button>
            <div className="col-sm-4"></div>
          </div>

          <div className="modalAddItemName">Nội tại:</div>
          <div className="modalAddItemValue">
            <input type="text" />
          </div>

          <div className="modalAddItemName">Kích hoạt:</div>
          <div className="modalAddItemValue">
            <input type="text" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Hủy
          </Button>
          <Button color="primary" onClick={uploadImage}>
            Xác nhận
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <br />
      <h4>Trang bị cơ bản</h4>
      <h4>Trang bị huyền thoại</h4>
      {itemData.map((item) => {
        return (
          <div key={item.id} className="divDivImageItem">
            <div className="divImageItem">
              <img className="imageItem" src={item.url} />
            </div>
          </div>
        );
      })}
      <h4>Trang bị thần thoại</h4>
    </Layout>
  );
};
export default Build;
