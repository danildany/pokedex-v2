export const resetScreen = (types)=>{
    for (const type of types) {
        $mainScreen.classList.remove(type)
    }
}
export const capitalize = (str)=>{
    let capStr = str[0].toUpperCase() + str.substr(1);
    return capStr
}
