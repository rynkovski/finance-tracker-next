import { Goal, Lightbulb, ListChecks } from "lucide-react";
import FeatureCard from "./features-card";

const data = [
  {
    icon: <Lightbulb size={56} />,
    title: "Smart Budgeting Made Simple",
    description:
      "Effortlessly create and manage budgets tailored to your financial goals. Receive timely insights and recommendations to optimize your spending, ensuring your money works for you.",
  },
  {
    icon: <ListChecks size={56} />,
    title: "Track Your Expenses with Ease",
    description:
      " Stay in control by tracking your daily expenditures. Visualize your spending patterns and identify areas for savings. Budget Buddy empowers you to make informed decisions about your money.",
  },
  {
    icon: <Goal size={56} />,
    title: "Set and Achieve Financial Goals",
    description:
      "Define your aspirations, and let Budget Buddy guide you to success. Whether it's a dream vacation, a new gadget, or building an emergency fund, we'll help you stay on track and motivated.",
  },
];

function Features() {
  return (
    <div className="flex flex-col gap-4 py-8 md:flex-row">
      {data.map((feature) => {
        return <FeatureCard key={feature.title} {...feature} />;
      })}
    </div>
  );
}

export default Features;
