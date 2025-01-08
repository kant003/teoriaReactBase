import LinkDescription from "../components/LinkDescription";
import { routes } from "../routes/routesConfig";

export default function Home() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {routes.map(({ to, title, description }) => (
          <li key={to} className='flex'>
            {to ? (
              <LinkDescription
                to={to}
                title={title}
                description={description}
                
              />
            ) : (
              <span className={`${title?.startsWith('Ejercicio')&&'border border-blue-800'} text-2xl font-bold text-orange-300`}>
                {title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
