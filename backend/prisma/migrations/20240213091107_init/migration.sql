-- CreateTable
CREATE TABLE "Birds" (
    "bird_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "sex" VARCHAR(1) NOT NULL,
    "breeder" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "cockParent" TEXT NOT NULL,
    "henParent" TEXT NOT NULL,
    "hatchBatch" TEXT NOT NULL,
    "sold" DATE,
    "deceased" DATE,
    "hatch_date" DATE NOT NULL,
    "location" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "healthEvents" TEXT[],
    "showPlacing" VARCHAR(3) NOT NULL,
    "weights" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Birds_pkey" PRIMARY KEY ("bird_id")
);

-- CreateTable
CREATE TABLE "Weights" (
    "weight_id" SERIAL NOT NULL,
    "leg_tag" VARCHAR(4) NOT NULL,
    "Date" DATE NOT NULL,
    "Weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weights_pkey" PRIMARY KEY ("weight_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Birds_name_key" ON "Birds"("name");

-- AddForeignKey
ALTER TABLE "Birds" ADD CONSTRAINT "Birds_weights_fkey" FOREIGN KEY ("weights") REFERENCES "Weights"("weight_id") ON DELETE RESTRICT ON UPDATE CASCADE;
