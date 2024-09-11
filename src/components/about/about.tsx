import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Poursha Karimi</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            I&apos;m a passionate web developer with expertise in modern
            frontend technologies. With about one year and a half of experience
            in creating responsive and user-friendly websites, I strive to
            deliver high-quality solutions that meet client needs and exceed
            expectations.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
