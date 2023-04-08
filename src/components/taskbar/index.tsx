import Link from "next/link";
import { TaskBarIconType, TaskBarItemType } from "./types";
import { useRouter } from "next/router";

export const TaskBar = () => {
  return (
    <div className="h-16 w-full flex justify-between py-4 px-5 border-b-2">
      <div className="flex justify-between">
        <TaskBarItem name="Nova Compra" href="/" />
        <TaskBarItem name="Histórico" href="/historico" />
      </div>

      <div className="flex justify-between text-center">
        <TaskBarIcon icon="settings" />
        <div className="w-icon h-icon rounded-full bg-p-purple"></div>
      </div>
    </div>
  );
};

export const TaskBarItem = ({ name, href, ...props }: TaskBarItemType) => {
  const router = useRouter();
  const selected = router.asPath === href;
  const customStyle = `${selected ? "font-bold" : ""}`;

  return (
    <div className={`w-fit rounded mr-5 p-1 text-center ${customStyle}`}>
      <Link href={href}> {name}</Link>
    </div>
  );
};

export const TaskBarIcon = ({ icon, color, ...props }: TaskBarIconType) => {
  const customStyle = `${color ? color : "text-black"}`;

  return (
    <div className={`w-icon rounded mr-5 pt-1 ${customStyle}`}>
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
};
