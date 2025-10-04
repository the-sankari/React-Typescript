# React TypeScript Learning Repository

Welcome to your comprehensive React TypeScript learning journey! This repository contains multiple projects and examples designed to teach you React development with TypeScript from basics to advanced concepts.

## 🎯 Learning Objectives

By working through this repository, you will learn:

- **TypeScript Fundamentals** applied to React development
- **React Components** with proper TypeScript typing
- **State Management** using hooks with TypeScript
- **Event Handling** with type safety
- **Custom Hooks** development
- **Best Practices** for React TypeScript projects
- **Real-world Application** development

## 📚 Repository Structure

```
react-typescript/
├── src/
│   ├── basics/                 # TypeScript fundamentals
│   ├── components/             # React components with TypeScript
│   ├── hooks/                  # Custom hooks examples
│   ├── projects/               # Complete project examples
│   │   ├── todo-app/          # Todo application
│   │   ├── weather-app/       # Weather dashboard
│   │   └── shopping-cart/     # E-commerce cart
│   └── utils/                  # Utility functions and types
├── exercises/                  # Practice exercises
└── docs/                      # Additional learning materials
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Basic JavaScript knowledge
- VS Code (recommended) with TypeScript extension

### Installation

1. Clone this repository:

```bash
git clone https://github.com/the-sankari/React-Typescript.git
cd react-typescript
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📖 Learning Path

### Phase 1: TypeScript Fundamentals (Week 1)

- [ ] **Basic Types**: string, number, boolean, arrays
- [ ] **Interfaces**: Defining object shapes
- [ ] **Type Aliases**: Creating reusable types
- [ ] **Union Types**: Handling multiple types
- [ ] **Generics**: Creating flexible, reusable code
- [ ] **Optional Properties**: Making properties optional

### Phase 2: React + TypeScript Basics (Week 2)

- [ ] **Functional Components**: Basic component typing
- [ ] **Props Interface**: Defining component props
- [ ] **Children Props**: Handling React children
- [ ] **Event Handlers**: Typing click, change, submit events
- [ ] **Conditional Rendering**: With type safety
- [ ] **Lists & Keys**: Rendering arrays with proper typing

### Phase 3: State Management & Hooks (Week 3)

- [ ] **useState Hook**: State with TypeScript
- [ ] **useEffect Hook**: Side effects with dependencies
- [ ] **useContext Hook**: Context API with TypeScript
- [ ] **useReducer Hook**: Complex state management
- [ ] **Custom Hooks**: Creating reusable logic
- [ ] **useRef Hook**: DOM manipulation and refs

### Phase 4: Advanced Patterns (Week 4)

- [ ] **Higher-Order Components**: HOCs with TypeScript
- [ ] **Render Props**: Flexible component patterns
- [ ] **Compound Components**: Building complex UIs
- [ ] **Error Boundaries**: Error handling with TypeScript
- [ ] **Performance Optimization**: React.memo, useMemo, useCallback
- [ ] **Testing**: Unit testing React TypeScript components

### Phase 5: Real-World Projects (Week 5-6)

- [ ] **Todo Application**: CRUD operations, local storage
- [ ] **Weather Dashboard**: API integration, async operations
- [ ] **Shopping Cart**: Complex state management, routing
- [ ] **Blog Platform**: Content management, authentication

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Code Examples

### Basic Component with TypeScript

```tsx
interface UserProps {
  name: string;
  age: number;
  isActive?: boolean;
}

const User: React.FC<UserProps> = ({ name, age, isActive = true }) => {
  return (
    <div className={`user ${isActive ? "active" : "inactive"}`}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};
```

### State Management with TypeScript

```tsx
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const TodoApp: React.FC = () => {
  const [state, setState] = useState<TodoState>({
    todos: [],
    filter: 'all'
  });

  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    setState(prev => ({
      ...prev,
      todos: [...prev.todos, newTodo]
    }));
  };

  return (
    // Component JSX
  );
};
```

## 📝 Best Practices

### TypeScript

- ✅ Use interfaces for object shapes
- ✅ Prefer type inference when possible
- ✅ Use union types for limited options
- ✅ Define proper return types for functions
- ❌ Don't use `any` type unless absolutely necessary

### React

- ✅ Use functional components with hooks
- ✅ Keep components small and focused
- ✅ Use proper prop types
- ✅ Handle loading and error states
- ❌ Don't mutate state directly

### File Organization

- ✅ One component per file
- ✅ Use descriptive file names
- ✅ Group related files in folders
- ✅ Separate types in dedicated files
- ✅ Use barrel exports (index.ts)

## 🔧 Useful VS Code Extensions

- **TypeScript Importer** - Auto import management
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **Auto Rename Tag** - HTML tag renaming
- **TypeScript Hero** - TypeScript tooling

## 📚 Recommended Resources

### Documentation

- [React Official Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Courses & Tutorials

- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [React + TypeScript Course](https://epicreact.dev/)
- [Advanced React Patterns](https://patterns.dev/)

### Tools & Libraries

- [Vite](https://vitejs.dev/) - Build tool
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [React Query](https://tanstack.com/query) - Data fetching
- [Zustand](https://github.com/pmndrs/zustand) - State management

## 🤝 Contributing

This is a learning repository, but contributions are welcome! If you find errors or want to add more examples:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Next Steps

1. Start with the TypeScript fundamentals in `/src/basics/`
2. Work through each phase systematically
3. Complete the exercises in `/exercises/`
4. Build the projects in `/src/projects/`
5. Share your progress and ask questions!

---

**Happy Learning! 🎉**

_Remember: The best way to learn React TypeScript is by building things. Don't just read the code - type it out, experiment with it, and make it your own!_
