-- CreateTable
CREATE TABLE "reviews" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT,
    "rating" INTEGER,
    "review" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);
