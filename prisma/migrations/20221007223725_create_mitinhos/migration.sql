-- CreateTable
CREATE TABLE "mitinhos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "mitinhos_username_key" ON "mitinhos"("username");

-- CreateIndex
CREATE UNIQUE INDEX "mitinhos_email_key" ON "mitinhos"("email");
