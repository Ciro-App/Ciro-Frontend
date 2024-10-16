import React, { useState } from "react";
import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Input,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addAddress } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../../../components/AddressCard/AddressCard";
import { createAddressValidator } from "../../../utils/inputValidator";
import citiesJson from "../../../utils/data/filteredMendozaCities.json";

export default function AddressData({ user }) {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);

  const [open, setOpen] = useState(false);
  const [openInputTag, setOpenInputTag] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [input, setInput] = useState({
    userUid: user.uid,
    name: null,
    number: null,
    city: null,
    locality: null,
    zipCode: null,
    floorOrApartment: "-",
    tag: "Casa",
  });
  const [localities, setLocalities] = useState(citiesJson.localities);
  const [cities, setCities] = useState(citiesJson.cities);

  // useEffect(() => {
  //   console.log("Aca estoy", input.city);
  // }, [input.city]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInput({
      userUid: user.uid,
      name: null,
      number: null,
      city: null,
      locality: null,
      zipCode: null,
      floorOrApartment: "-",
      tag: "Casa",
    });
    setError(false);
  };

  const handleCancel = () => {
    setInput({
      userUid: user.uid,
      name: null,
      number: null,
      city: null,
      locality: null,
      zipCode: null,
      floorOrApartment: "-",
      tag: "Casa",
    });
    setOpen(false);
    setError(false);
  };

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function handleTag(e) {
    if (e.target.name !== "Otro") {
      setOpenInputTag(false);
      setInput({ ...input, ["tag"]: e.target.name });
    } else {
      setInput({ ...input, ["tag"]: e.target.value });
    }
  }

  function handleSubmit(e) {
    let results = createAddressValidator(
      input.name,
      input.number,
      input.zipCode,
      input.floorOrApartment,
      input.city,
      input.locality,
      input.tag
    );

    setError(results.error);
    let continueRegister = results.allowCreate;

    if (continueRegister) {
      setLoader(true);
      dispatch(addAddress(user, input)).then(setOpen(false));
      setInput({
        userUid: user.uid,
        name: null,
        number: null,
        city: null,
        locality: null,
        zipCode: null,
        floorOrApartment: "-",
        tag: "Casa",
      });
    }
  }

  function handleOtherTag(e) {
    setOpenInputTag(true);
    setInput({ ...input, ["tag"]: e.target.name });
  }

  /* AUTOCOMPLETE STATE */
  const localitiesProps = {
    options: localities,
    getOptionLabel: (option) => option.name,
  };
  const citiesProps = {
    options: cities,
    getOptionLabel: (option) => option.name ?? "N/A",
  };
  // create your filer options here
  const renderOptions = (props, option) => {
    return (
      <li {...props} key={option.id}>
        {option.name}
      </li>
    );
  };

  return (
    // <div className="grid grid-cols-2 md:grid lg:grid md:grid-cols-3 lg:grid-cols-5 rounded-2xl lg:h-2/3  gap-8">
    <div className="flex justify-start md:justify-start flex-wrap rounded-2xl w-full lg:h-2/3 gap-5">
      {/* NEW ADDRESS BUTTON */}
      <Box
        component="span"
        sx={{ p: 1, border: "1px dashed white", borderRadius: "25px" }}
        className="h-40 w-44 md:w-56 md:h-56 lg:h-56 lg:w-56  flex items-center justify-center"
      >
        <Button
          onClick={handleClickOpen}
          className="flex-col-2 items-center justify-center gap-2 w-full h-full "
        >
          <AddCircleIcon
            sx={{ height: "1em", width: "1em" }}
            className="text-white"
          />
          <span className="text-[0.8em] text-white">Agregar dirección</span>
        </Button>
      </Box>

      {/* ADDRESS CARD */}
      {addresses
        ? addresses.map((address, index) => (
            <AddressCard key={index} address={address} user={user} />
          ))
        : false}

      {/* -------------- */}
      {/* MODAL FORMULARIO */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center">Nueva dirección</DialogTitle>
        <DialogContent dividers className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col w-full">
              <span className="text-sm">CALLE</span>
              <Input
                error={error.name}
                name="name"
                // defaultValue={user.displayName}
                inputProps={{ maxLength: 50 }}
                placeholder="Calle ejemplo"
                onChange={(e) => handleInput(e)}
              />
              {error.name ? (
                <span className="text-[12px] text-red-500 font-bold">
                  Formato de dirección no válido.
                </span>
              ) : (
                false
              )}
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col w-36">
              <span className="text-sm">NÚMERO</span>
              <Input
                error={error.number}
                name="number"
                type="number"
                inputProps={{ max: 99999, min: 0 }}
                placeholder="1234"
                // defaultValue={user.displayName}
                onChange={(e) => handleInput(e)}
              />
              {error.number ? (
                <span className="text-[12px] text-red-500 font-bold">
                  Número incompleto.
                </span>
              ) : (
                false
              )}
            </div>
            <div className="flex flex-col w-full">
              <span className="text-sm">PISO/DEPARTAMENTO</span>
              <Input
                error={error.floorOrApartment}
                name="floorOrApartment"
                // type="number"
                placeholder="N° de casa o departamento..."
                defaultValue={"-"}
                onChange={(e) => handleInput(e)}
              />
              {error.floorOrApartment ? (
                <span className="text-[12px] text-red-500 font-bold">
                  Campo incompleto.
                </span>
              ) : (
                false
              )}
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col w-36">
              <span className="text-sm">C.P</span>
              <Input
                error={error.zipCode}
                name="zipCode"
                // defaultValue={user.displayName}
                type="number"
                placeholder="5519"
                onChange={(e) => handleInput(e)}
              />
              {error.zipCode ? (
                <span className="text-[12px] text-red-500 font-bold">
                  Código postal no admitido.
                </span>
              ) : (
                false
              )}
            </div>

            {/* AUTOCOMPLETE DE CIUDADES */}
            <div className="flex flex-col w-full">
              <span className="text-sm">CIUDAD</span>
              <Autocomplete
                {...citiesProps}
                id="auto-complete"
                name="city"
                onSelect={(e) => handleInput(e)}
                renderInput={(params) => (
                  <TextField
                    error={error.city}
                    name="city"
                    placeholder="Elige la ciudad"
                    {...params}
                    label=""
                    variant="standard"
                  />
                )}
              />
              {error.city ? (
                <span className="text-[12px] text-red-500 font-bold">
                  Ciudad no válida.
                </span>
              ) : (
                false
              )}
            </div>
          </div>

          {/* AUTOCOMPLETE DE LOCALIDADES */}
          <div className="flex flex-col w-full">
            <span className="text-sm">LOCALIDAD</span>
            <Autocomplete
              {...localitiesProps}
              // filterOptions={filterOptions}
              renderOption={renderOptions}
              id="auto-complete"
              name="locality"
              onSelect={(e) => handleInput(e)}
              renderInput={(params) => (
                <TextField
                  error={error.locality}
                  {...params}
                  name="locality"
                  label=""
                  variant="standard"
                />
              )}
            />
            {error.locality ? (
              <span className="text-[12px] text-red-500 font-bold">
                Localidad no válida.
              </span>
            ) : (
              false
            )}
          </div>
          <div className="flex flex-col  gap-3">
            <span className="text-sm">
              ¿QUÉ NOMBRE LE DAREMOS A ESTA DIRECCIÓN?
            </span>
            <div className="flex flex-wrap gap-5">
              <button
                name="Casa"
                className={
                  input.tag === "Casa"
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleTag(e)}
              >
                Casa
              </button>
              <button
                name="Oficina"
                className={
                  input.tag === null || input.tag === "Oficina"
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleTag(e)}
              >
                Oficina
              </button>
              <button
                name="Trabajo"
                className={
                  input.tag === "Trabajo"
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleTag(e)}
              >
                Trabajo
              </button>
              <button
                name="Universidad"
                className={
                  input.tag === "Universidad"
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleTag(e)}
              >
                Universidad
              </button>
              <button
                name="Escuela"
                className={
                  input.tag === "Escuela"
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleTag(e)}
              >
                Escuela
              </button>
              <button
                name="Otro"
                className={
                  input.tag === "Otro" ||
                  (input.tag !== "Escuela" &&
                    input.tag !== "Oficina" &&
                    input.tag !== "Casa" &&
                    input.tag !== "Universidad" &&
                    input.tag !== "Trabajo")
                    ? "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1 bg-[#4675C0] text-sm"
                    : "rounded-full w-fit h-8 px-2 lg:w-30 lg:px-4 lg:py-1  bg-gray-600 hover:bg-[#4675C0] text-sm"
                }
                onClick={(e) => handleOtherTag(e)}
              >
                Otro
              </button>
              {openInputTag ? (
                <section className="flex flex-col">
                  <Input
                    error={error.tag}
                    name="Otro"
                    type="text"
                    placeholder="Ingresa un nombre"
                    // defaultValue={user.displayName}
                    onChange={(e) => handleTag(e)}
                  />
                  {error.tag ? (
                    <span className="text-[12px] text-red-500 font-bold">
                      Nombre no válido o demasiado largo.
                    </span>
                  ) : (
                    false
                  )}
                </section>
              ) : (
                false
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
      {/* --------------- */}
      {/* LOADER */}
      {loader ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        false
      )}
    </div>
  );
}
