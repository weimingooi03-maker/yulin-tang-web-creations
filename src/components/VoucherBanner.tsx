import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, X } from "lucide-react";

const COUNTDOWN_SECONDS = 30 * 60;
const STORAGE_KEY = "voucherBannerExpiry";
const DISMISS_KEY = "voucherBannerDismissed";

const VoucherBanner = () => {
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  });
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    let expiry = Number(sessionStorage.getItem(STORAGE_KEY));
    if (!expiry || expiry < Date.now()) {
      expiry = Date.now() + COUNTDOWN_SECONDS * 1000;
      sessionStorage.setItem(STORAGE_KEY, String(expiry));
    }
    const tick = () => {
      const remaining = Math.max(0, Math.round((expiry - Date.now()) / 1000));
      setSecondsLeft(remaining);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClaim = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#products");
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  if (dismissed || secondsLeft <= 0) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      onClick={handleClaim}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClaim()}
      className="relative mx-auto max-w-3xl mt-4 mb-2 px-4 sm:px-0 cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-destructive via-orange-500 to-destructive shadow-xl shadow-destructive/30 px-5 py-4 sm:px-7 sm:py-5 flex items-center justify-between gap-3 animate-voucher-pulse hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center">
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-90" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-yellow-300" />
            </span>
            <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-base sm:text-xl font-extrabold text-white truncate">
              🎉 恭喜您获得超值优惠券！点击这里领取
            </p>
            <p className="text-xs sm:text-sm text-white/90 truncate">
              Congratulations! You have won a special discount voucher — Click here to claim
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-white font-mono font-extrabold text-xl sm:text-3xl bg-black/20 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 tabular-nums">
            {timeStr}
          </span>
          <button
            onClick={handleDismiss}
            aria-label="关闭 Close"
            className="text-white/80 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherBanner;
