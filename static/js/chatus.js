const Qs = (el) => document.querySelector(el);
const QsAll = (el) => document.querySelectorAll(el);

const $chatMessages = Qs(".messages");
const buton = document.querySelector(".testeteste");

const teste = () => {
    console.log("teste")
}

const setRoomActive = (room_id) => {
  QsAll(".list-rooms li").forEach((el) => el.classList.remove("active"));
  Qs(`#room-${room_id}`).classList.add("active");
  Qs("#selected-room").value = room_id;
};

const getMessages = async (room_id) => {
  const response = await fetch(`/${room_id}`);
  const html = await response.text();
  $chatMessages.innerHTML = html;
  setRoomActive(room_id);
};