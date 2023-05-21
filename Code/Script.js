var TopBarMode = true;
        function ChangeTopBarMode()
        {
            if (TopBarMode)
            {
                document.getElementById("LeftBar").style.width = "250px";
                document.getElementById("Mesh").style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }
            else
            {
                document.getElementById("LeftBar").style.width = "0";
                document.getElementById("Mesh").style.backgroundColor = "rgba(0, 0, 0, 0)";
            }

            TopBarMode = !TopBarMode;
        }