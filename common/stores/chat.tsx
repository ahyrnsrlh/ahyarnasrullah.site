import { create } from "zustand";
import { MessageProps } from "../types/chat";

interface ChatStoreProps {
  isOpen: boolean;
  messages: MessageProps[];
  isLoading: boolean;
  error: string | null;
  toggleChat: () => void;
  setMessages: (messages: MessageProps[]) => void;
  addMessage: (message: MessageProps) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useChatStore = create<ChatStoreProps>((set) => ({
  isOpen: false,
  messages: [],
  isLoading: false,
  error: null,
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));

export default useChatStore;
