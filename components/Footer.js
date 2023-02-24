import useResource from '../hooks/useResource';

export default function Footer() {
  const { resources } = useResource()
  return (
    <footer className="p-5 flex items-center justify-left h-16 bg-lab-green fixed bottom-0 w-full">
      {!resources
        ? <p>&copy; 2023</p>
        : <p className="font-bold text-xl"> {resources.length} stores created worldwide!</p>
      }
    </footer>
  );
}