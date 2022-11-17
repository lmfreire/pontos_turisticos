-- CreateTable
CREATE TABLE "fotos" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pontos_turisticos_id" TEXT NOT NULL,

    CONSTRAINT "fotos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pontos_turisticos" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cidade_id" TEXT NOT NULL,

    CONSTRAINT "pontos_turisticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cidade_nome_key" ON "cidade"("nome");

-- AddForeignKey
ALTER TABLE "fotos" ADD CONSTRAINT "fotos_pontos_turisticos_id_fkey" FOREIGN KEY ("pontos_turisticos_id") REFERENCES "pontos_turisticos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pontos_turisticos" ADD CONSTRAINT "pontos_turisticos_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
