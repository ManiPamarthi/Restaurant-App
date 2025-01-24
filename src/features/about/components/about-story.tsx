import { FaUtensils, FaLeaf, FaHeart, } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutStorySection = () => {
    const values = [
        { icon: <FaUtensils />, title: "Quality", description: "Finest ingredients and culinary excellence" },
        { icon: <FaLeaf />, title: "Sustainability", description: "Eco-friendly practices and local sourcing" },
        { icon: <FaHeart />, title: "Passion", description: "Love for food and exceptional service" }
      ];
    
      const team = [
        { name: "John Doe", role: "Executive Chef", image: "/images/apple.png", bio: "20+ years of culinary expertise" },
        { name: "Jane Smith", role: "Sous Chef", image: "/images/google.png", bio: "Specializes in fusion cuisine" },
        { name: "Mike Johnson", role: "Pastry Chef", image: "/images/apple.png", bio: "Award-winning dessert artist" }
      ];
  return (
            <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                      <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="p-6 bg-white rounded-lg shadow-lg text-center"
                      >
                          <div className="text-3xl text-amber-600 mb-4">{value.icon}</div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p>{value.description}</p>
                      </motion.div>
                  ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-semibold text-center mb-12">Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-6 bg-white rounded-lg shadow-lg text-center"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={40}
                                height={40}
                                className="rounded-full mx-auto mb-4 object-cover" 
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-amber-600">{member.role}</p>
                            <p className="mt-2">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutStorySection;