import { getSongById } from "@/app/actions";
import getImageUrl from "@/composables/getImageUrl";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const song = await getSongById(+params.id);
  if (!song) {
    redirect("/not-found");
  }

  const songImageUrl = getImageUrl(song);

  return (
    <>
      <main className="gradient-dark h-screen overflow-auto pb-[64px] md:pb-0">
        <div className="flex  flex-col gap-4 border-b border-neutral-800 bg-pink-400 px-2 pb-4 pt-[48px] md:flex-row md:items-end md:px-4 md:pb-10 md:pt-[60px]">
          <div className="relative aspect-square w-full min-w-[80px] max-w-[min(130px,60vw)] self-center shadow-2xl md:block md:w-[20vw] md:max-w-[200px]">
            <Image
              src={songImageUrl}
              alt="liked songs"
              sizes="160px"
              fill
              className="object-cover md:rounded-md"
            />
          </div>
          <div>
            <p className="hidden md:block">Single</p>
            <h1 className="max-w-[96vw] truncate text-xs font-bold sm:text-xl md:max-w-[38vw] md:pb-8 md:pt-4 md:text-[clamp(1rem,7vw,3rem)]">
              {song.title}
            </h1>
            <p className="text-xs text-neutral-300 md:text-sm md:text-white">
              {song.artist}
            </p>
          </div>
        </div>
        <section className="mt-2 md:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolor
          voluptatibus similique consequatur, veniam debitis quia, itaque, optio
          facere repellendus doloribus recusandae tempora veritatis velit odio
          quidem id minus perferendis. Odio quae beatae magnam aut mollitia
          suscipit excepturi totam maxime doloremque natus atque, reprehenderit
          iusto numquam labore deleniti sequi? Quasi asperiores impedit placeat
          alias voluptates odit dignissimos qui voluptas magnam! Ea cupiditate
          nam eos officia architecto porro ullam, dolore tenetur perspiciatis
          quae at dolores repellendus aspernatur vero? Vitae cumque consectetur
          odit eum architecto adipisci et libero, harum quidem at repellat.
          Architecto ducimus illo maxime corporis laboriosam animi quibusdam
          consectetur, dolore quaerat. Magni pariatur rerum accusantium
          laudantium unde officia, consequatur doloremque, molestias, deserunt
          sunt asperiores. Nisi incidunt aut doloremque vitae possimus. Sequi
          sapiente officiis unde porro consequuntur? Praesentium distinctio
          voluptate, eligendi, modi laudantium sequi aspernatur recusandae, ab
          veniam odio molestiae aperiam est enim? Sapiente quibusdam omnis animi
          molestias ipsum, expedita suscipit. Voluptate molestiae sunt,
          veritatis quos iusto sapiente aspernatur delectus, eos provident
          incidunt veniam quam aut? Beatae, sunt excepturi. At ex officiis nisi
          repudiandae, totam aperiam aliquid a natus. At, impedit! Quis dicta
          quibusdam magnam soluta architecto tenetur adipisci, fugit vitae iusto
          et odio! Odit magnam perspiciatis debitis. Praesentium voluptatum
          deserunt maxime ducimus debitis quis dolores cumque. Maiores atque
          nostrum repellat. Quam repudiandae perferendis ut officia molestias
          cum animi vero autem sit libero soluta neque, harum cumque ipsa
          necessitatibus dolorum tempore atque numquam corrupti inventore
          distinctio recusandae deleniti, aspernatur illum? Quo? Reiciendis
          consequatur fuga repellat explicabo iusto culpa minima accusamus amet
          dolorum? Vero sequi nostrum dignissimos ipsa aperiam laboriosam?
          Voluptas error, velit molestiae quibusdam eos recusandae quidem
          perferendis iste natus. Fuga. Commodi eaque libero consectetur
          mollitia ex fugiat, ipsum minima deserunt iste itaque aperiam dolor!
          Maiores sint illo, officiis tenetur autem magnam, excepturi enim
          dolorum veniam nulla magni ut perferendis natus? Ex provident at vel
          recusandae itaque sint illo veritatis fugiat eius quo ut ducimus a
          exercitationem culpa ipsam sed ipsa, aspernatur cumque fugit
          necessitatibus unde odio iusto iste. Amet, explicabo! Voluptates sequi
          ullam nobis recusandae officiis perferendis quas error, quaerat
          suscipit sint sit natus aspernatur quasi animi exercitationem ducimus,
          enim doloribus tenetur voluptate. Debitis at similique ut, pariatur
          neque hic. Quae illum aperiam, repellat, ducimus quidem excepturi
          cupiditate aut, veritatis iusto eaque animi ullam? Minus quae ullam
          excepturi aperiam, totam adipisci voluptatem, reprehenderit
          recusandae, ut suscipit assumenda eveniet quasi optio? Itaque tenetur
          amet officia nihil suscipit accusantium odit quidem temporibus esse
          est fugit natus dicta distinctio numquam officiis dolorem, culpa
          ducimus iste. Tempora debitis, iste hic maxime perspiciatis eligendi
          omnis. Et quidem veniam quod delectus voluptate ratione nostrum id
          veritatis debitis accusantium fugit, distinctio dicta dolorem enim
          facere perferendis? Non enim necessitatibus consectetur doloremque vel
          blanditiis laborum repudiandae facilis tempore? Beatae cupiditate
          quibusdam soluta illo ut impedit officia assumenda quas, fugit
          quisquam commodi cum quod aut esse, ea nulla eveniet nisi dolorem
          minima quia nobis magni tempore fugiat in. Rerum. Inventore nam quis
          deserunt exercitationem eaque saepe perferendis id! Laboriosam eveniet
          ipsam dolor qui enim molestias necessitatibus sapiente, id rem aliquid
          in? Magni, doloremque laudantium? Eveniet blanditiis sed quas
          aspernatur? Voluptatem corporis beatae, recusandae porro commodi
          incidunt omnis non? Rerum quo veniam neque commodi! Consectetur
          cupiditate sequi corrupti. Nobis explicabo natus fugiat pariatur
          nesciunt ad libero magnam aut alias ullam. Incidunt obcaecati quam
          voluptatum est quod ut iure beatae, aperiam excepturi accusamus,
          asperiores at nulla commodi nesciunt id ad rerum molestiae in
          perferendis harum, laboriosam cum ea culpa? Eius, excepturi. Quas
          minima quis impedit dolorem, at atque veritatis harum quo doloremque
          accusamus. Sunt nihil earum quod error laudantium quos cupiditate
          commodi et assumenda voluptas velit architecto maiores, dolorem aut.
          Nulla?
        </section>
      </main>
    </>
  );
};

export default page;
