// src/app/services/layout.tsx
export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50">
      {children}
    </div>
  );
}