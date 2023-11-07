import Image from "next/image";

export default async function Page() {
  return (
    <div className="max-w-2xl mb-48 mx-auto text-lg">
      <div className="mt-36 mb-8 text-center">
        <h1 className="text-3xl">
          Fable? True story? So to speak, small history.
        </h1>
      </div>

      <div className="mb-6 flex flex-row gap-4 justify-center">
        <Image
          src={
            "https://v1.next-orders.org/api/avatar/c6duwkgphc4zse0pp167q8kf?size=140&gender=MALE&emotion=8&clothing=green"
          }
          alt="Миша"
          unoptimized
          width={80}
          height={80}
          className="rounded-full"
        />

        <Image
          src={
            "https://v1.next-orders.org/api/avatar/c6duwkgphc4zsepp167q8kf?size=140&gender=MALE&emotion=5&clothing=blue"
          }
          alt="Женя"
          unoptimized
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div>
        <p className="mb-6">
          Two long-time friends and colleagues live in the same wonderful city:{" "}
          <span className="text-green-500 font-medium">Mike</span> and{" "}
          <span className="text-blue-500 font-medium">Jake</span>. They have
          been friends since childhood, go to the gym together, go fishing. They
          love to discuss technology and cars. Mike is an optimist. Believes in
          enterprise development and constantly improving service. He is a keen
          observer of the food industry. Jake, on the contrary, constantly
          complains about the market, about greedy businessmen.
        </p>

        <p className="mb-6">
          And then one day Mike decided to surprise his friend Jake on his
          birthday - order sushi and rolls for the festive table for a group of
          friends. He sought to prove he was right, while strengthening his
          inner vision of the world around him. Mike was looking forward to how
          would talk about the ordering process and how well he was treated as a
          client. If he notices flaws, he will definitely point out the
          shortcomings to the responsible people.
        </p>

        <p className="mb-6">
          I note that Mike had never ordered food online before this moment. He
          did this over the phone, at moments when colorful advertising flyers
          came to hand. What to say, it was rare and on gray days.
        </p>

        <p className="mb-6">
          There were two hours and fifteen minutes left before the general
          gathering, and Mike is confident that everything will go well. The
          food will be prepared and delivered on time. He looked out the window:
          what a wonderful autumn Saturday day! What will go wrong?
        </p>

        <p className="mb-6">
          For a long time could not place an order on the website because it was
          terribly inconvenient and not intuitive. Mike did this on a large
          monitor of his work computer. “The food photos are terrible. Where is
          the cart? Oh, there you go. Select your area? How do I know.” Mike did
          not give up and continued to try, but it was no use. He was tired of
          filling out a bunch of data and forms.
        </p>

        <p className="mb-6">
          Then he saw an advertising banner for the application, saying
          “download and order without problems.” Inspired by the proposal, he
          took his modern smartphone, with a bunch of cores and memory. Found
          the link and downloaded it. The app&apos;s rating confused him: 3.2
          out of five. The application constantly crashed and required a bunch
          of incomprehensible data and permissions. Mike began to get nervous
          and angry, but continued to try. He met mediocre banners with
          promotions, a la “refer a friend - get interest on his orders in the
          future.” This seemed very strange to Mike, raising many questions.
        </p>

        <p className="mb-6">
          “Wait, the menu and prices are different? That&apos;s how it is...”
          Mike began to wonder whether the data on the website was out of date
          or here. There is so much displayed on a small screen, you have to do
          a lot of finger movements. “Well, this could be put on a separate
          page,” thought Mike.
        </p>

        <p className="mb-6">
          After a while, frustrated, he called customer service to place an
          order via call. But here, too, problems arose - the robot told him
          that all the operators were now busy. After waiting for a while, the
          woman answered Mike. It was hard to hear her, she kept confusing
          something all the time and could not explain simple things to Mike:
          how much the delivery would cost, whether it would be delivered on
          time, whether there was a birthday present. He understood the main
          thing - the kitchen could not cope with the number of orders, the
          rolls would not be delivered in time for the general gathering.
        </p>

        <p className="mb-6">
          He was upset. Mike lost a lot of time and nerves due to the fact that
          he was unable to order food online quickly and conveniently as he
          originally wanted.
        </p>

        <p className="mb-6">
          He decided not to deal with such a low-quality service in the near
          future and began to wonder whether the food delivery market was really
          that good? As a result, the friends decided to celebrate Jake’s
          birthday in a nearby cafe. “I told you so,” Jake said with a slight
          ironic grin, finishing a piece of pizza.
        </p>
      </div>

      <div className="mt-16">
        <p>To be continued.</p>
      </div>
    </div>
  );
}
