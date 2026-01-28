import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 bg-secondary/30">
      <div className="border-t border-muted-foreground mb-4"></div>

      <p className="text-center text-muted-foreground text-sm">
        © {currentYear} Nusrat Jahan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

