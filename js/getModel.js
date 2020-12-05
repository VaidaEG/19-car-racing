function getModel(modelsList) {
    const randomIndex = Math.floor(Math.random() * modelsList.length);
    return modelsList[randomIndex];
}

export { getModel }