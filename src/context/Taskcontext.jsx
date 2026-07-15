import { createContext, useContext, useReducer } from "react";

const Taskcontext = createContext();

const initialstate = {
  task: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: [
          ...state.task,
          {
            id: Date.now(),
            text: action.payload.text,
            priority: action.payload.priority,
            date: action.payload.date,
            complete: false,
          },
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        task: state.task.map((t) =>
          t.id === action.payload ? { ...t, complete: !t.complete } : t,
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        task: state.task.map((t) =>
          t.id === action.payload.id ? { ...t, text: action.payload.text } : t,
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        task: state.task.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
};

export const Taskprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <Taskcontext.Provider value={{ state, dispatch }}>
      {children}
    </Taskcontext.Provider>
  );
};

export const usetask = () => useContext(Taskcontext);
