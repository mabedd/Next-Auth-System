const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-md w-full bg-primary p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Container;
