import Link from "next/link";
import { Star, MapPin, Phone, Mail, Globe, Shield, Clock, Award, CheckCircle, ArrowLeft } from "lucide-react";

export default function PhoenixGutterInstallersPage() {
  const contractor = {
    id: 1000,
    slug: "phoenix-gutter-installers",
    name: "Phoenix Gutter Installers",
    location: "Phoenix, AZ",
    state: "AZ",
    city: "Phoenix",
    rating: 4.8,
    reviews: 67,
    phone: "(602) 555-0123",
    email: "info@phoenixgutters.com",
    website: "www.phoenixgutters.com",
    services: ["Seamless Gutters", "Gutter Repair", "Gutter Cleaning", "Downspouts", "Gutter Guards", "Emergency Service"],
    verified: true,
    established: "2010",
    employees: "15-25",
    serviceRadius: "50 miles",
    description: "Professional gutter installation and repair services in Phoenix, AZ. Licensed, insured, and committed to protecting your home with quality gutter systems. Our experienced team serves the entire Phoenix metropolitan area with prompt, reliable service, specializing in desert climate gutter solutions.",
    specialties: [
      "Desert climate gutter systems",
      "Heat-resistant materials", 
      "Monsoon season protection",
      "Commercial and residential",
      "Emergency service available",
      "Free estimates and consultations",
      "Expert knowledge of Phoenix building codes",
      "Weather-appropriate solutions for Arizona"
    ],
    certifications: [
      "AZ State Licensed Contractor",
      "Fully Insured & Bonded",
      "Better Business Bureau A+ Rating",
      "Professional Installation Guarantee",
      "Desert Climate Specialist"
    ],
    reviewHighlights: [
      {
        author: "Maria S.",
        rating: 5,
        comment: "Excellent service in Phoenix! Professional team, quality materials designed for our desert heat, and fair pricing. Highly recommended for anyone needing gutter work."
      },
      {
        author: "David L.",
        rating: 5,
        comment: "We use them for all our Phoenix properties. Always reliable, professional, and their work holds up well in our extreme weather conditions and monsoons."
      },
      {
        author: "Jennifer M.",
        rating: 4,
        comment: "Great experience from quote to completion. They really know the Phoenix area and provided exactly what we needed for the desert climate."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm">
            <Link href="/directory" className="text-gray-500 hover:text-gray-700 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Directory
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/locations/arizona/phoenix" className="text-gray-500 hover:text-gray-700">
              Phoenix, AZ
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{contractor.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <h1 className="text-4xl font-bold text-gray-900">{contractor.name}</h1>
                    {contractor.verified && (
                      <div className="ml-3 flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        <Shield className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{contractor.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(contractor.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 ml-2">
                      {contractor.rating}
                    </span>
                    <span className="text-gray-600 ml-2">
                      ({contractor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {contractor.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Established</p>
                  <p className="text-gray-600">{contractor.established}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Team Size</p>
                  <p className="text-gray-600">{contractor.employees}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Service Area</p>
                  <p className="text-gray-600">{contractor.serviceRadius}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={`tel:${contractor.phone}`} className="text-gray-900 hover:text-orange-500 font-medium">
                      {contractor.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={`mailto:${contractor.email}`} className="text-gray-900 hover:text-orange-500">
                      {contractor.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={`https://${contractor.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-orange-500">
                      {contractor.website}
                    </a>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/quote"
                    className="w-full bg-orange-500 text-white py-3 px-4 rounded-md font-medium hover:bg-orange-600 transition-colors text-center block"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href={`tel:${contractor.phone}`}
                    className="w-full bg-gray-800 text-white py-3 px-4 rounded-md font-medium hover:bg-gray-700 transition-colors text-center block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Offered in {contractor.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contractor.services.map((service) => (
              <div key={service} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us in {contractor.city}</h2>
              <ul className="space-y-3">
                {contractor.specialties.map((specialty) => (
                  <li key={specialty} className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications</h2>
              <ul className="space-y-3">
                {contractor.certifications.map((cert) => (
                  <li key={cert} className="flex items-start">
                    <Shield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractor.reviewHighlights.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-gray-900">{review.author}</span>
                </div>
                <p className="text-gray-700 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Gutter Service in {contractor.city}?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get a personalized quote for your {contractor.city} gutter project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${contractor.phone}`}
              className="bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
            >
              Call {contractor.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Phoenix Gutter Installers - Phoenix, AZ | Local Gutters Directory",
    description: "Professional gutter installation and repair services in Phoenix, AZ. Licensed, insured contractors specializing in desert climate gutter solutions. 4.8/5 rating. Get free quotes today!",
    keywords: "Phoenix Gutter Installers, gutter contractor Phoenix AZ, gutter installation Phoenix, gutter repair Phoenix, seamless gutters Phoenix, desert climate gutters",
  };
}
