const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-border"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary"></div>
        </div>

        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text">
            LIFT LAB
          </h2>

          <p className="mt-2 text-text-secondary">
            Preparing your workout...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;