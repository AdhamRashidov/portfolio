import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Projects } from "./sections/projects";
import { Stack } from "./sections/stack";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <About />

      <Projects />

      <Stack />

      <Contact />
    </div>
  );
};
