import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { PanelLeftClose, PanelRightClose } from "lucide-react"; // 🆕 Using lucide-react icons

const SidebarTrigger = () => {
  const { toggleSidebar, state } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("size-fit")}
      onClick={() => toggleSidebar()}
    >
      {state === "expanded" ? (
        <PanelLeftClose className="w-6 h-6" />
      ) : (
        <PanelRightClose className="w-6 h-6" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export default SidebarTrigger;
