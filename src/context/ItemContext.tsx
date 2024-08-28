import { createContext, ReactNode, useState } from "react";
import { ItemType } from "../interface/ItemType";

interface ItemsContextType {
    items: ItemType[];
    setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

export const ItemsContext = createContext<ItemsContextType | null>(null);

interface ItemsProviderProps {
    children: ReactNode;
}

function ItemsProvider({ children }: ItemsProviderProps) {
    const [items, setItem] = useState<ItemType[]>([{
        id: 1,
        tasks: [{
            _id: 1,
            title: 'Test',
            isComplete: false,
        }],
        position: {
            x: 10,
            y: 10,
        }
    }]);

    return (
        <ItemsContext.Provider value={{ items, setItem }}>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider