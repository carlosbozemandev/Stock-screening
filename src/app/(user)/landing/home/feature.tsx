"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  ArrowUpRightFromSquare,
  CandlestickChart,
  ChartLineIcon,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="container mt-12 mb-3">
      <div className="grid grid-cols-1 md:flex lg:flex justify-center gap-12">
        <div className="p-2">
          <Card
            className={cn(
              "text-white w-full h-full bg-gradient-to-r  from-black via-gray-800 to-black"
            )}
            {...props}
          >
            <CardHeader>
              <CardTitle>Stock Screener</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <div className="flex justify-center">
                    <ChartLineIcon className="w-8 h-8 mb-3" />
                  </div>
                  <p className="text-sm font-medium leading-none p-4">
                    Generate investing ideas fast in the Stock Screener Filter
                    the stock market quickly and confidently. With hundreds of
                    financial measures ready to use.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Start Stock Screener
                    </p>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="w-full rounded-md p-1 flex items-center justify-center bg-blue-500  space-x-2"
                href={"/stock-screener"}
              >
                Try now <ArrowUpRightFromSquare className="w-5 h-5 ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="p-2">
          <Card
            className={cn(
              "text-white  w-full h-full bg-gradient-to-r  from-black via-gray-800 to-black"
            )}
            {...props}
          >
            <CardHeader>
              <CardTitle>Candle Stick & Tools</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <div className="flex justify-center">
                    <CandlestickChart className="w-8 h-8 mb-3" />
                  </div>
                  <p className="text-sm font-medium leading-none p-4">
                    Time your trades better with Charts & Signals Everything you
                    need to create stunning technical analysis studies on all
                    your stocks. Create, annotate and save on every device.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Start Stock Screener
                    </p>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="w-full rounded-md p-1 flex items-center justify-center bg-blue-500  space-x-2"
                href={"/trading-view"}
              >
                Try now <ArrowUpRightFromSquare className="w-5 h-5 ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
