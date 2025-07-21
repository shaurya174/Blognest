import express from "express";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
let teditor ="";
let ceditor = "";
let user_posts = [];
let posts = [
  {
    id: 1,
    name: "Power of Words",
    title: "Unspoken Influence",
    post: "Words shape our reality. From poetry to politics, the language we choose carries immense weight. It builds empires or starts revolutions. Thoughtful words heal wounds, inspire change, and offer comfort during pain. Yet careless words can cut deeply. In today’s digital world, where tweets and posts fly rapidly, using our words wisely is more important than ever. The power of language is a gift, and with it comes responsibility. We must listen more, speak with intention, and write with clarity. Whether through books, speeches, or everyday talks, our words truly define the impact we leave behind.",
    author: "Aman Verma",
    date: "15/01/2021"
  },
  {
    id: 2,
    name: "Digital Minimalism",
    title: "Less Screen, More Life",
    post: "In an age of constant notifications and endless scrolling, digital minimalism is gaining importance. It’s not about quitting technology but being intentional about its use. Removing distractions like excessive apps and curated social feeds helps reclaim focus. With fewer interruptions, creativity flows, and real connections deepen. Instead of losing hours on screens, we invest time in books, nature, and family. This lifestyle encourages quality over quantity. We begin to notice the beauty around us. Life feels fuller. Practicing digital minimalism isn’t a rejection of progress—it’s a rediscovery of balance in a hyper-connected world.",
    author: "Ritika Shah",
    date:"28/03/2021"
  },
  {
    id: 3,
    name: "Why We Code",
    title: "Code That Connects",
    post: "Coding isn’t just about typing lines into a machine. It’s storytelling with logic, creativity mixed with structure. We build tools that solve real problems and connect people across the globe. A developer’s role is like a modern-day architect, designing structures that live on the internet. Each function, each class, serves a purpose. As we debug, we learn patience; as we deploy, we share our creation. Through code, ideas become reality. It’s a universal language where your background doesn’t matter. Whether you’re building games, apps, or AI, the reason we code remains the same: to create, connect, and contribute.",
    author: "Shaurya Mittal",
    date:"07/06/2021"
  },
  {
    id: 4,
    name: "Chasing Consistency",
    title: "Discipline > Motivation",
    post: "Motivation fades, but consistency stays. That’s the secret behind every long-term success. We often wait to ‘feel ready’ before taking action, but champions act even when it’s hard. Daily habits build identity. Showing up regularly creates momentum. Whether you're studying DSA or building projects, a little progress daily adds up. Set routines, track habits, and show up for yourself. Even on bad days. Especially on bad days. You don’t need to be extreme—just consistent. That’s how internships are landed and careers are built. One disciplined day at a time.",
    author: "Karan Saini",
    date:"20//09/2021"
  },
  {
    id: 5,
    name: "The Portfolio Rule",
    title: "Projects Speak Louder",
    post: "You can say you’re a developer—but your GitHub is what proves it. In today’s hiring scene, a strong portfolio is your real resume. Employers don’t want marksheets—they want proof of skill. From a to-do app to a resume classifier, each project you build tells your story. Add documentation, polish the UI, and make it live. Build things that solve problems or show your curiosity. Even a blog website speaks volumes if it's well-made. Recruiters remember creators. Let your code speak before you even enter the room. That’s how Tier-3 students break ceilings.",
    author: "Ravi Jha",
    date:"04/12/2021"
  },
  {
    id: 6,
    name: "Imposter Syndrome",
    title: "You Belong Here",
    post: "Ever felt like you're not good enough? That you're just pretending and everyone else is smarter? That’s imposter syndrome. It hits students, interns—even professionals. But here’s the truth: if you're trying, you're growing. Everyone starts somewhere. The best developers were once confused by simple loops. Don't compare your beginning to someone else’s middle. Document your journey, share progress, and ask questions. You’re not alone. Keep learning. The only real imposter is the one who quits. You belong here. Your effort matters. Your dreams are valid.",
    author: "Neha Tripathi",
    date:"12/02/2022"
  },
  {
    id: 7,
    name: "Night Owl Grind",
    title: "Coding After Midnight",
    post: "Some of us bloom under moonlight. While the world sleeps, we debug errors, push commits, and chase dreams in silence. Late-night sessions aren’t just about caffeine and music—they’re sacred rituals of focus. Fewer distractions, clearer thoughts. Whether it’s learning React or deploying a blog, night owls build in peace. But remember, rest matters too. Hustle smart. Respect your body. Let the night be your canvas—but don’t burn out your flame. The real magic is in consistency, not chaos.",
    author: "Tushar Mehta",
    date:"30/04/2022"
  },
  {
    id: 8,
    name: "Failure First",
    title: "Fail. Learn. Repeat.",
    post: "Failure isn’t opposite of success—it’s the staircase to it. Your first few projects may flop. Your resume might get rejected 20 times. But every rejection teaches. Every bug strengthens your logic. Don’t fear failure. Embrace it. Break things, fix them, try again. The only ones who never fail are those who never try. In coding and life, trial and error is the best teacher. Stand up every time. You’re getting closer. That’s growth.",
    author: "Zoya Khan",
    date:"10/07/2022"
  },
  {
    id: 9,
    name: "The Power of Sharing",
    title: "Build in Public",
    post: "When you share your journey, you inspire others—and yourself. Building in public means posting your projects, errors, successes online. Share GitHub repos, tweet bugs, write blogs. You’ll attract collaborators, feedback, and maybe recruiters. It’s not bragging—it’s documenting. And it builds your credibility over time. In a noisy internet, honesty cuts through. Don’t wait till you’re perfect. Share while you’re learning. That’s how you grow fast and grow loud.",
    author: "Ankush Rawat",
    date:"11/06/2022"
  },
  {
    id: 10,
    name: "Side Projects Matter",
    title: "Your Playground to Shine",
    post: "Side projects are your creative escape. No deadlines, no restrictions—just curiosity. Build that weather app, clone YouTube, or make a chatbot. These projects show initiative, problem-solving, and real learning. When applying for internships, they stand out more than GPA. Choose topics you care about. Let your curiosity lead the way. Side projects aren’t side—they’re your superpower. Make them count.",
    author: "Ishika Raj",
    date:"12/09/2022"
  },
  {
    id: 11,
    name: "The Resume Game",
    title: "Crafting Your First Impression",
    post: "Your resume is your handshake before the handshake. It’s not about listing everything—it’s about showing value fast. Use action verbs, show impact, and highlight projects. Tailor each resume to the role. Put links to GitHub and portfolio front and center. Use clean formatting, no typos, and no fluff. Your resume should say: 'I’m ready.' Don’t wait for perfection—iterate on it. And remember: recruiters spend seconds, not minutes. Make those seconds count.",
    author: "Rahul Joshi",
    date:"1/01/2023"
  },
  {
    id: 12,
    name: "Focus Mode",
    title: "Deep Work Beats Busy Work",
    post: "In a world full of distractions, the ability to focus is rare—and powerful. Real progress doesn’t come from multitasking. It comes from deep, focused sessions. Block time for code, turn off notifications, and get into flow. Use tools like Pomodoro or apps like Notion to plan your day. Even 2 hours of deep work beats 8 hours of shallow work. Respect your time like gold. Focus isn’t about doing more—it’s about doing what matters.",
    author: "Shruti Nair",
    date:"2/05/2023"
  },
  {
    id: 13,
    name: "AI is Here",
    title: "Adapt, Don't Panic",
    post: "With ChatGPT, Copilot, and AI tools rising, many wonder if dev jobs are safe. The truth? AI is a tool—not a replacement. It helps you write code faster, debug better, and learn quicker. But creativity, architecture, empathy—those are still human. Instead of fearing AI, learn to use it. It’s your co-pilot, not your competitor. Stay adaptable, stay curious. The future belongs to those who collaborate with AI, not compete against it.",
    author: "Tanmay Kulkarni",
    date:"15/03/2023"
  },
  {
    id: 14,
    name: "The GitHub Profile",
    title: "More Than Green Squares",
    post: "Your GitHub isn’t just a repo dump—it’s your developer profile. Pin top projects, write clear READMEs, and use commit messages that tell a story. Contribute to open source, even in small ways. Star cool repos, fork and play around. It shows you’re active and learning. Hiring managers often peek at GitHub before anything else. So treat it like a portfolio. Keep it clean, active, and honest. It speaks louder than words.",
    author: "Deepika Sharma",
    date:"19/03/2023"
  },
  {
    id: 15,
    name: "DSA Dilemma",
    title: "Problem Solving Mindset",
    post: "DSA is more than Leetcode streaks—it’s about solving problems with logic. Arrays and trees are just tools. What matters is how you approach a problem, break it down, and implement it cleanly. Learn the concepts, but also ask: how does this help real-world dev? Mix DSA with projects. Don’t obsess over CP unless it excites you. Focus on patterns, not problems. That’s how you become a thinking developer.",
    author: "Sarthak Jain",
    date:"22/05/2023"
  },
  {
    id: 16,
    name: "Frontend Magic",
    title: "Make It Beautiful, Make It Work",
    post: "Frontend isn’t just about colors and buttons—it’s the user's first impression. A good UI feels smooth, responsive, and intuitive. Learn HTML, CSS, and JavaScript deeply. Play with animations, layout, and accessibility. Try libraries like Tailwind, React, and Framer Motion. Frontend is where logic meets art. Your blog, your portfolio—they are your canvas. So make it shine.",
    author: "Muskan Patel",
    date:"25/01/2024"
  },
  {
    id: 17,
    name: "Backend Basics",
    title: "Power Behind the Scenes",
    post: "Backend development powers the logic, data, and structure of any web app. It’s where things 'work' beyond the visuals. Learn Express, Node.js, databases, APIs. Understand HTTP, CRUD, and auth. Think in terms of data flow and scalability. Backend isn’t flashy—but it’s critical. And when you master it, you build apps that truly function. It’s the brain behind the beauty.",
    author: "Aarav Bhatt",
    date:"26/02/2024"
  },
  {
    id: 18,
    name: "Version Control",
    title: "Why Git is Your Best Friend",
    post: "Git isn’t just a tool—it’s a lifesaver. With it, you can experiment fearlessly, track changes, and collaborate smoothly. Learn Git basics: commits, branches, merges. Push often, commit smartly. Use `.gitignore`. Don’t fear the terminal. It’s your safety net. Git gives you confidence to break and build. Master it—and you’ll feel unstoppable.",
    author: "Harshitha Rao",
    date:"19/06/2024"
  },
  {
    id: 19,
    name: "Internship Mindset",
    title: "It's a Two-Way Street",
    post: "Getting an internship is great. But how you treat it matters more. Be curious, ask questions, observe how teams communicate. Take feedback positively. Work beyond your task—suggest improvements, document properly. Internships are not just for them to judge you—it’s for you to learn if the culture fits. Make the most of it. Show them you’re a learner, a doer, and a future asset.",
    author: "Abhinav Tyagi",
    date:"31/07/2024"
  },
  {
    id: 20,
    name: "Tier 3 Advantage",
    title: "From Underdog to Unstoppable",
    post: "Coming from a Tier-3 college doesn’t mean you’re behind. It means you’ll work harder, smarter, and prove doubters wrong. Learn in public, build real projects, contribute online. Network on LinkedIn, ask for feedback, stay hungry. Your zip code doesn’t define your potential. Your grind does. You’re not stuck—you’re warming up. And when you rise, they’ll ask where you came from. Smile and say, 'Tier 3.'",
    author: "Shaurya Mittal",
    date:"29/11/2024"
  }
];
let curr = 21;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/allposts',(req,res)=>{
    res.render("allposts",{success:false,myposts:posts});
})
app.get('/create',(req,res)=>{
    res.render("create");
})
app.get('/posts',(req,res)=>{
    res.render("posts",{myyposts:user_posts});
})
app.get('/contact',(req,res)=>{
    res.render("contact");
})
app.post('/submit',(req,res)=>{
  let new_post = {};
  new_post.id=curr;
  curr++;
  new_post.name="New Post";
  new_post.title = req.body["title"];
  new_post.author = req.body["fname"]+" "+req.body["lname"];
  new_post.post = req.body["blog"];
  new_post.date = String(req.body["date"]);
  posts.push(new_post);
  user_posts.push(new_post);
  res.render("allposts",{success:true,myposts:posts});
})


app.post("/delete", (req, res) => {
  const postIdToDelete = parseInt(req.body.id);

  // Remove from user_posts
  user_posts = user_posts.filter(post => post.id !== postIdToDelete);

  // Remove from all posts
  posts = posts.filter(post => post.id !== postIdToDelete);

  // Re-render with updated data
  res.render("posts", { myyposts: user_posts });
});







app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = user_posts.find(p => p.id === postId);
  if (post) {
    res.render("edit", { post }); // pass existing post to pre-fill form
  } else {
    res.redirect("/posts");
  }
});


app.post("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, blog } = req.body;

  // Update in user_posts
  user_posts = user_posts.map(p => {
    if (p.id === postId) {
      return { ...p, title, post: blog };
    }
    return p;
  });

  // Update in posts as well
  posts = posts.map(p => {
    if (p.id === postId) {
      return { ...p, title, post: blog };
    }
    return p;
  });

  res.redirect("/posts"); // ✅ Redirect to show updated list
});








const PORT = process.env.PORT || 3000;























app.listen(PORT,()=>{
    console.log("Starting Blog Web Application");
})