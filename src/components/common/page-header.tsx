type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <h1 className="text-3xl font-bold text-secondary dark:text-secondaryDark sm:text-4xl">
      {title}
    </h1>
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary/50 dark:text-secondaryDark/50">
      {subtitle}
    </p>
  </div>
);

export default PageHeader;
