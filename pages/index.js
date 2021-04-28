import MainLayout from "../components/MainLayout";
import Link from "next/link";

export default function Home({ mainPost, posts }) {
  return (
    <MainLayout title={"Next Blog | Home"} activeRoute={"home"}>
      <div className="jumbotron mt-4 mb-3 py-3 px-4 text-dark border rounded bg-white">
        <h4>
          Welcome to Next Blog example by{" "}
          <a href="https://github.com/senior-vova" target="_blank">
            Senior Vova
          </a>
        </h4>
        <h4>
          Fork me on Github{" "}
          <a href="https://github.com/senior-vova/next-blog" target="_blank">
            Next Blog
          </a>
        </h4>
        <h5>The Design used from Bootstrap-Blog</h5>
      </div>
      <div className="jumbotron p-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Article of Week</h1>
          <p className="lead my-3 big-letter">{mainPost.title}</p>
          <p className="lead mb-0">
            <Link href={`/article/${mainPost.id}`}>
              <a className="text-white font-weight-bold">Continue reading...</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="mb-0 big-letter">{posts[1].title}</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="mb-auto big-letter">{posts[1].body}</p>
              <Link href={`/article/${posts[1].id}`}>
                <a className="stretched-link">Continue reading</a>
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Design
              </strong>
              <h3 className="mb-0 big-letter">{posts[0].title}</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto big-letter">{posts[0].body}</p>
              <Link href={`/article/${posts[0].id}`}>
                <a className="stretched-link">Continue reading</a>
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>
          <div className="blog-post">
            <h2 className="blog-post-title">Sample blog post</h2>
            <p className="blog-post-meta">
              January 1, 2014 by <a>Mark</a>
            </p>
            <p>
              This blog post shows a few different types of content that’s
              supported and styled with Bootstrap. Basic typography, images, and
              code are all supported.
            </p>
            <hr />
            <p>
              Yeah, she dances to her own beat. Oh, no. You could've been the
              greatest. 'Cause, baby, <a>you're a firework</a>. Maybe a reason
              why all the doors are closed. Open up your heart and just let it
              begin. So très chic, yeah, she's a classic.
            </p>
            <blockquote>
              <p>
                Bikinis, zucchinis, Martinis, no weenies. I know there will be
                sacrifice but that's the price.{" "}
                <strong>This is how we do it</strong>. I'm not sticking around
                to watch you go down. You think you're so rock and roll, but
                you're really just a joke. I know one spark will shock the
                world, yeah yeah. Can't replace you with a million rings.
              </p>
            </blockquote>
            <p>
              Trying to connect the dots, don't know what to tell my boss.
              Before you met me I was alright but things were kinda heavy. You
              just gotta ignite the light and let it shine. Glitter all over the
              room <em>pink flamingos</em> in the pool.{" "}
            </p>
            <h2>Heading</h2>
            <p>
              Suiting up for my crowning battle. If you only knew what the
              future holds. Bring the beat back. Peach-pink lips, yeah,
              everybody stares.
            </p>
            <h3>Sub-heading</h3>
            <p>
              You give a hundred reasons why, and you say you're really gonna
              try. Straight stuntin' yeah we do it like that. Calling out my
              name. ‘Cause I, I’m capable of anything.
            </p>
            <pre>
              <code>Example code block</code>
            </pre>
            <p>
              Before you met me I was alright but things were kinda heavy. You
              just gotta ignite the light and let it shine.
            </p>
            <h3>Sub-heading</h3>
            <p>
              You got the finest architecture. Passport stamps, she's
              cosmopolitan. Fine, fresh, fierce, we got it on lock. Never
              planned that one day I'd be losing you. She eats your heart out.
            </p>
            <ul>
              <li>Got a motel and built a fort out of sheets.</li>
              <li>Your kiss is cosmic, every move is magic.</li>
              <li>Suiting up for my crowning battle.</li>
            </ul>
            <p>
              Takes you miles high, so high, 'cause she’s got that one
              international smile.
            </p>
            <ol>
              <li>Scared to rock the boat and make a mess.</li>
              <li>I could have rewrite your addiction.</li>
              <li>I know you get me so I let my walls come down.</li>
            </ol>
            <p>After a hurricane comes a rainbow.</p>
          </div>

          <div className="blog-post">
            <h2 className="blog-post-title">Another blog post</h2>
            <p className="blog-post-meta">
              December 23, 2013 by <a>Jacob</a>
            </p>

            <p>
              I am ready for the road less traveled. Already{" "}
              <a>brushing off the dust</a>. Yeah, you're lucky if you're on her
              plane. I used to bite my tongue and hold my breath. Uh, She’s a
              beast. I call her Karma (come back). Black ray-bans, you know
              she's with the band. I can't sleep let's run away and don't ever
              look back, don't ever look back.
            </p>
            <blockquote>
              <p>
                Growing fast into a <strong>bolt of lightning</strong>. Be
                careful Try not to lead her on
              </p>
            </blockquote>
            <p>
              I'm intrigued, for a peek, heard it's fascinating. Oh oh! Wanna be
              a victim ready for abduction. She's got that international smile,
              oh yeah, she's got that one international smile. Do you ever feel,
              feel so paper thin. I’m gon’ put her in a coma. Sun-kissed skin so
              hot we'll melt your popsicle.
            </p>
            <p>
              This is transcendental, on another level, boy, you're my lucky
              star.
            </p>
          </div>

          <div className="blog-post">
            <h2 className="blog-post-title">New feature</h2>
            <p className="blog-post-meta">
              December 14, 2013 by <a>Chris</a>
            </p>

            <p>
              From Tokyo to Mexico, to Rio. Yeah, you take me to utopia. I'm
              walking on air. We'd make out in your Mustang to Radiohead. I mean
              the ones, I mean like she's the one. Sun-kissed skin so hot we'll
              melt your popsicle. Slow cooking pancakes for my boy, still up,
              still fresh as a Daisy.
            </p>
            <ul>
              <li>I hope you got a healthy appetite.</li>
              <li>You're never gonna be unsatisfied.</li>
              <li>Got a motel and built a fort out of sheets.</li>
            </ul>
            <p>
              Don't need apologies. Boy, you're an alien your touch so foreign,
              it's <em>supernatural</em>, extraterrestrial. Talk about our
              future like we had a clue. I can feel a phoenix inside of me.
            </p>
          </div>
        </div>

        <aside className="col-md-4 blog-sidebar">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">
              Saw you downtown singing the Blues. Watch you circle the drain.
              Why don't you let me stop by? Heavy is the head that{" "}
              <em>wears the crown</em>. Yes, we make angels cry, raining down on
              earth from up above.
            </p>
          </div>

          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li>
                <a>March 2014</a>
              </li>
              <li>
                <a>February 2014</a>
              </li>
              <li>
                <a>January 2014</a>
              </li>
              <li>
                <a>December 2013</a>
              </li>
              <li>
                <a>November 2013</a>
              </li>
              <li>
                <a>October 2013</a>
              </li>
              <li>
                <a>September 2013</a>
              </li>
              <li>
                <a>August 2013</a>
              </li>
              <li>
                <a>July 2013</a>
              </li>
              <li>
                <a>June 2013</a>
              </li>
              <li>
                <a>May 2013</a>
              </li>
              <li>
                <a>April 2013</a>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  const res3 = await fetch(`https://jsonplaceholder.typicode.com/posts/3`);
  const pars = await res.json();
  const pars2 = await res2.json();
  const pars3 = await res3.json();
  return { mainPost: pars, posts: [pars2, pars3] };
};
