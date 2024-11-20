const dataFromLs = () => {
    const data = localStorage.getItem("cart");
    if(data) {
        const savedData = JSON.parse(data);
        return savedData;
        // return JSON.parse(data);
    }
    return [];

}

const saveCartToLs = (data) => {
    localStorage.setItem("cart", JSON.stringify(data))
}

const saveData = (id) => {
    const getValue = dataFromLs();
    // console.log(getValue);
    getValue.push(id);
    // localStorage.setItem("cart", JSON.stringify(getValue));
    saveCartToLs(getValue)
}

const removeFromLs = (id) => {
    const getValue = dataFromLs();
    const valueAfterRemoved = getValue.filter(itemId => itemId !== id);
    saveCartToLs(valueAfterRemoved);
}

export {saveData, dataFromLs, removeFromLs};