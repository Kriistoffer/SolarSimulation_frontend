export const calculateDistance = (x_1, x_2, y_1, y_2) => {
    return Math.sqrt(Math.pow((x_2 - x_1), 2) + (Math.pow(y_2 - y_1), 2));
};