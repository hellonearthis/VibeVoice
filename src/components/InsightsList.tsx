export default function InsightsList() {
  const insights = [
    "Speaker diarization accuracy increased by 15% for multi-mic setups.",
    "New export format: JSON for video caption automation.",
  ];

  return (
    <div className="rounded-2xl bg-surface-container p-8">
      <h3 className="font-display text-xl font-semibold text-on-surface mb-4">Recent Insights</h3>
      <ul className="space-y-4">
        {insights.map((text, i) => (
          <li key={i} className="flex gap-4">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-orange" />
            <p className="text-sm leading-relaxed text-on-surface-variant">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-on-surface/5 pt-8">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxCueI7QrxJeLVm9n5mWB6FOooRBxTm9NK3BMvcNI7fbw_kOG_0tuDzsP730XSWi4M-taGJJJinrWKZtfj7T0kO6h8fxVJDIKkhAzM8BRd3HLwJyedZ6pWkKPTj2Lj31-91Tis56FIpGpErL-c_e7BFYAcw6oPOQQ9HFeg5K7uOQbPlhsYlfOhOnjKGYkGxcBwBpUt730vTV1X9walAmVMwnGnkL9Hz92mU6eWMN33M730LCoVZVfgyyV3ZjAQark07AITJfs5"
          alt="Microphone Studio"
          className="h-32 w-full rounded-xl object-cover mb-4 shadow-sm"
          referrerPolicy="no-referrer"
        />
        <p className="font-medium text-sm text-on-surface">
          Pro Tip: Use the 'Studio' mode for high-ambient noise recordings.
        </p>
      </div>
    </div>
  );
}
