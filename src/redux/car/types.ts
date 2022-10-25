export interface CarSliceState {
    items: Cars[];
    status: Status;
};

export type Cars = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: string[];
    types: number[];
    rating: number;
};
export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
};