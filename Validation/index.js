const GLConfig = {
  CO: {
    type: "REQUIRED"
  },
  MAJ: {
    type: "NORMAL"
  },
  SET: {
    type: "NORMAL"
  },
  MIN: {
    type: "REQUIRED"
  }
};

const GLSegments = {
  CO: "023",
  MAJ: "",
  SET: "895",
  MIN: "5"
};


const validateGLconfig = (ObjList) => {
  let flag = false;
  for (const [key, value] of Object.entries(GLConfig)) {
    if (value.type === "REQUIRED" && String(ObjList[key]).length <= key.length && String(ObjList[key]).length !== 0) {      
      flag = true;
    } else if (value.type === "NORMAL" && String(ObjList[key]).length <= key.length) {
      flag = true;
    } else {
      return flag = false;
    }
  }
  return flag;
};
const checkCondition = validateGLconfig(GLSegments);
console.log(checkCondition);