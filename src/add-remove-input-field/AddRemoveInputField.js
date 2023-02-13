import { useState } from "react";
function AddRemoveInputField() {
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

  return (
    <div className="container">
      {inputFields.map((data, index) => {
        const { index_type } = data;
        return (
          <div className="row my-3" key={index}>
            <div className="col">
              <div className="form-group">
                <select
                  value={index_type}
                  name="index_type"
                  id="cars"
                  onChange={(evnt) => handleChange(index, evnt)}
                >
                  <option>Choose</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="vw">VW</option>
                  <option value="audi">Audi</option>
                </select>
                <input
                  type="number"
                  value={inputFieldsIndex[index].index_value}
                  name="index_value"
                  onChange={(evnt) => handleChangeIndex(index, evnt)}
                />
              </div>
            </div>

            <div className="col">
              {inputFields.length !== 1 ? (
                <button onClick={(evnt) => removeInputFields(index, evnt)}>
                  -
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      <button onClick={addInputField}>Add New</button>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
