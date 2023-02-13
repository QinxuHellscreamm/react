import { reactive, onMounted, onUnmounted } from "vue";
interface Imouse {
  x: number;
  y: number;
}

const getMousePosition = () => {
  const mousePosition: Imouse = reactive({
    x: 0,
    y: 0,
  });
  onMounted(() => {
    console.log("onMounted");
    document.addEventListener("click", updateMousePosition);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMousePosition);
  });
  const updateMousePosition = (e: MouseEvent) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
    console.log(mousePosition);
  };
  return mousePosition;
};

export default getMousePosition;
