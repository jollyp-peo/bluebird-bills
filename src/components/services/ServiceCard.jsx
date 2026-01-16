import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon: Icon, path, gradient }) => {
  return (
    <Link to={path} className="block">
      <div className="service-card glass-card p-6 rounded-2xl border border-border/30 h-full">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7 text-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-accent text-sm font-medium">
          <span>Get Started</span>
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
