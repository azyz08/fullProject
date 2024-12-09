import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import useMode from "./utils/zustand";
import Footer from "./components/footer";

export default function App() {
  const { darkMode } = useMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="site bg-[white] text-[black] duration-300 dark:bg-[#292929] dark:text-[white]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="pages">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquid dolore laboriosam nisi, quo velit, tempore sint dolorem, nobis nostrum odit laborum. Aliquam corporis reprehenderit, sint corrupti quas, nulla exercitationem voluptatum eius a sequi perspiciatis fugiat ad. Omnis nobis saepe tenetur amet possimus recusandae eos enim repellat atque quas? Consequatur, minus animi officiis accusamus laudantium quia blanditiis vel delectus debitis aperiam incidunt deleniti iste, expedita libero, aspernatur facilis omnis possimus dolorum culpa repellat veritatis eum. Quibusdam sapiente nulla eum quis ducimus quia dignissimos ad velit assumenda praesentium, autem in, repellendus beatae unde voluptas. Maiores labore est voluptas consequatur? Voluptate accusantium dignissimos amet iste ipsum! Fuga facilis odit ipsam praesentium asperiores quam atque veniam, ab consectetur necessitatibus cupiditate assumenda. Fugiat nostrum dignissimos, hic optio veniam possimus fugit adipisci voluptates! Tempora iusto est quaerat voluptates aspernatur dolore molestias facere perspiciatis, voluptatem sapiente esse harum cumque incidunt atque sit reprehenderit adipisci aliquam eius nulla vero asperiores velit repellendus debitis. Assumenda, deleniti nam tempora dicta hic reprehenderit voluptas! Reiciendis, unde, voluptatum distinctio id aliquid architecto, placeat perferendis nisi ducimus maxime porro repellendus adipisci veniam! Veniam consectetur dolore, accusantium nobis velit perspiciatis, quisquam saepe cupiditate ipsum aliquam consequuntur ipsa molestias tempora, ex dolorum blanditiis incidunt doloremque. Unde, quae voluptas autem minus atque eaque inventore. Recusandae aperiam fugit perferendis, fuga eligendi voluptatum, voluptatem quisquam deleniti ab error non rem doloremque voluptatibus autem at harum quibusdam, illo sed! Soluta incidunt maxime odio deleniti aliquid cum nostrum, quod suscipit reiciendis minus odit accusamus, neque repudiandae explicabo quia a ex? Aliquid dolorum labore nihil placeat voluptatibus, quidem architecto temporibus corrupti numquam! Provident, adipisci rerum. Vel consequuntur quae facilis voluptates ad magni laudantium asperiores est, ducimus architecto. Iste nostrum dolores debitis id quos fugit voluptas qui voluptates possimus adipisci facilis non, maxime quam. Consequatur, ex tenetur veniam a earum, facilis commodi adipisci esse reiciendis natus qui assumenda ea mollitia aliquid labore voluptatum? Ipsa sed cumque non, amet, soluta enim, dolores minima sunt sequi unde vel molestias. Obcaecati odio nostrum ut delectus dicta maxime saepe libero accusamus rem dolorum nihil vero tempore, et beatae placeat voluptatibus, velit iusto eaque autem unde alias at! Ullam, ea totam beatae accusamus praesentium impedit mollitia amet quidem consequuntur, aspernatur dolores nam illum harum similique neque, suscipit corrupti earum quia sequi culpa iste voluptates quod veritatis eos? Saepe adipisci amet esse dolorum voluptates exercitationem magnam. Cum iusto iure dignissimos consequuntur architecto rerum esse corporis quasi dolorem quas. Eligendi quaerat temporibus amet ab iusto atque, accusantium suscipit quia blanditiis minus molestiae quis rerum molestias, tempore animi consequuntur vero assumenda corrupti beatae non. Molestiae iste quod sit, quaerat aperiam error itaque. Veniam, optio eveniet! Non, possimus cumque recusandae aspernatur perspiciatis, delectus neque eligendi enim accusantium laboriosam ad minus illum facere. Quia, maxime nihil cupiditate quo praesentium dicta et odio itaque autem sunt esse, aliquam distinctio corrupti exercitationem mollitia numquam impedit quod at voluptatibus asperiores. Expedita rem aliquid assumenda recusandae laudantium quasi hic eos consequatur facilis! Ad porro iste in? Animi nihil ratione expedita iure fugit earum illo tempora, eaque tenetur labore molestiae voluptatem! Tempore temporibus deleniti veniam praesentium cumque, possimus commodi quaerat animi ullam asperiores doloremque et voluptatibus facilis voluptas at! Aperiam, quas eaque quis molestiae quaerat alias repudiandae tempore quam maiores possimus, sit itaque cum? Aspernatur accusantium debitis, eos quam perspiciatis, autem ipsa assumenda eius veniam atque, eum iure! Nemo ducimus nostrum autem deserunt pariatur quasi totam! Nobis error distinctio voluptas quibusdam provident illum cumque. Expedita, consequuntur nam! Sunt voluptatem minima animi illo perferendis hic aspernatur numquam reiciendis alias illum. Inventore molestiae in accusamus eum nulla autem quisquam magnam soluta vero natus voluptates, totam minus aliquid a?</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
}
